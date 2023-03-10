'use strict';
/* global define: false */

define(['wdn', 'idm', 'jquery'], function (WDN, idm, $) {
  "use strict";

  var wdnProp = 'UA-3203435-1',
      unlDomain = '.unl.edu',
      Plugin,
      thisURL = String(window.location),
      initd = false,
      gaWdnName = 'wdn',
      gaWdn = gaWdnName + '.',
      mediaHubOrigin = 'https://mediahub.unl.edu';

  var bindLinks = function bindLinks() {
    WDN.log('Begin binding links for analytics'); //get the links in the navigation and maincontent

    var navLinks = $('a', '#dcf-navigation'),
        mainLinks = $('a', '#dcf-main'),
        evaluateLinks,
        filetypes = /\.(zip|exe|pdf|doc*|xls*|ppt*|mp3|m4v|mov|mp4)$/i;

    evaluateLinks = function evaluateLinks() {
      var link = $(this);
      var gahref = link.attr("href");

      if (!gahref) {
        return;
      }

      if (gahref.match(/^https?\:/i) && !gahref.match(document.domain)) {
        link.click(function () {
          Plugin.callTrackEvent('Outgoing Link', gahref, thisURL);
          Plugin.callTrackPageview(gahref, false);
        });
      } else if (gahref.match(/^mailto\:/i)) {
        var mailLink = gahref.replace(/^mailto\:/i, '');
        link.click(function () {
          Plugin.callTrackEvent('Email', mailLink, thisURL);
        });
      } else if (gahref.match(filetypes)) {
        link.click(function () {
          Plugin.callTrackEvent('File Download', gahref, thisURL);
          Plugin.callTrackPageview(gahref);
        });
      }
    }; //loop through all the links and pass them to type evaluation


    navLinks.each(evaluateLinks);
    mainLinks.each(evaluateLinks);
  };

  var bindBreadcrumbs = function bindBreadcrumbs() {
    $('#dcf-breadcrumbs a').one('click', function () {
      Plugin.callTrackEvent('Breadcrumbs', 'Click', thisURL);
    });
  }; // ga.js method for getting default tracker (with set account)


  var getDefaultGATracker = function getDefaultGATracker() {
    var tracker = _gat._getTrackerByName();

    if (tracker._getAccount() !== 'UA-XXXXX-X') {
      return tracker;
    }

    return undefined;
  }; // analytics.js method for getting default tracker


  var getDefaultAnalyticsTracker = function getDefaultAnalyticsTracker() {
    return ga.getByName('t0');
  };

  Plugin = {
    initialize: function initialize() {
      WDN.log("WDN site analytics loaded for " + thisURL);

      var version_dep = WDN.getDepVersion(),
          gaDim = 'dimension',
          domReady = function domReady() {
        var version_html = WDN.getHTMLVersion(),
            affiliation = idm.getPrimaryAffiliation();

        if (affiliation) {
          WDN.log("Tracking primary affiliation: " + affiliation);
          ga(gaWdn + 'set', gaDim + 1, affiliation);
        }

        ga(gaWdn + 'set', gaDim + 2, version_html);
        Plugin.callTrackPageview();
        $(bindLinks);
      };

      ga('create', wdnProp, {
        name: gaWdnName,
        cookieDomain: unlDomain,
        allowLinker: true
      });
      ga(gaWdn + 'require', 'linkid', 'linkid.js');
      ga(gaWdn + 'set', gaDim + 3, version_dep);

      if (!initd) {
        idm.initialize(function () {
          $(domReady);
        });
      }

      initd = true;
    },
    callTrackPageview: function callTrackPageview(thePage, trackInWDNAccount) {
      var action = 'pageview',
          method = 'send',
          legacyMethod = '_trackPageview';

      if (!thePage) {
        ga(gaWdn + method, action);
        return;
      }

      if (trackInWDNAccount !== false) {
        trackInWDNAccount = true;
      } // First, track in the wdn analytics


      if (trackInWDNAccount) {
        ga(gaWdn + method, action, thePage);
      } // Second, track in local site analytics


      try {
        _gaq.push(function () {
          var tracker = getDefaultGATracker();

          if (tracker) {
            tracker[legacyMethod](thePage);
          }
        });

        ga(function () {
          var tracker = getDefaultAnalyticsTracker();

          if (tracker) {
            tracker[method](action, thePage);
          }
        });
      } catch (e) {
        WDN.log("Pageview tracking for local site didn't work.");
      }
    },
    callTrackEvent: function callTrackEvent(category, evtaction, label, value, noninteraction) {
      var action = 'event',
          method = 'send',
          legacyMethod = '_trackEvent',
          evtOpt;

      if (noninteraction !== true) {
        noninteraction = false;
      }

      evtOpt = {
        eventCategory: category,
        eventAction: evtaction,
        eventLabel: label,
        eventValue: value,
        nonInteraction: noninteraction
      };
      ga(gaWdn + method, action, evtOpt);

      try {
        _gaq.push(function () {
          var tracker = getDefaultGATracker(),
              legacyValue = value;

          if (tracker) {
            if (typeof value !== "undefined") {
              legacyValue = Math.floor(value);
            }

            tracker[legacyMethod](category, evtaction, label, legacyValue, noninteraction);
          }
        });

        ga(function () {
          var tracker = getDefaultAnalyticsTracker();

          if (tracker) {
            tracker[method](action, evtOpt);
          }
        });
      } catch (e) {
        WDN.log("Event tracking for local site didn't work.");
      }
    },
    callTrackTiming: function callTrackTiming(category, variable, value, label, sampleRate) {
      var action = 'timing',
          method = 'send',
          legacyMethod = '_trackTiming';
      ga(gaWdn + method, action, category, variable, value, label);

      try {
        _gaq.push(function () {
          var tracker = getDefaultGATracker();

          if (tracker) {
            tracker[legacyMethod](category, variable, value, label, sampleRate);
          }
        });

        ga(function () {
          var tracker = getDefaultAnalyticsTracker();

          if (tracker) {
            tracker[method](action, category, variable, value, label);
          }
        });
      } catch (e) {
        WDN.log("Timing tracking for local site didn't work.");
      }
    },
    recordMediaHubEvents: function recordMediaHubEvents() {
      $(window).on('message', function (e) {
        var originalEvent = e.originalEvent;

        if (mediaHubOrigin != originalEvent.origin) {
          //Verify the origin
          return;
        }

        if ('ga_event' != originalEvent.data.message_type) {
          //not a ga event (maybe different event types in future?)
          return;
        }

        Plugin.callTrackEvent('media', originalEvent.data.event, originalEvent.data.media_title);
      });
    }
  };
  return Plugin;
});
