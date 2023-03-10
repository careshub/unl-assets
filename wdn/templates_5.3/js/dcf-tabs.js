define(["exports", "./dcf-utility"], function (_exports, _dcfUtility) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.DCFTabs = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  var dcfTabsObjects = [];
  /* eslint func-style: ["error", "declaration", { "allowArrowFunctions": true }] */

  var handleDCFTabsHashChange = function handleDCFTabsHashChange() {
    var resetTabGroupIDsProcessed = [];
    Array.prototype.forEach.call(dcfTabsObjects, function (dcfTabsObject) {
      var hash = window.location.hash;

      if (hash) {
        dcfTabsObject.displayTabByHash(hash);
      } else {
        Array.prototype.forEach.call(dcfTabsObject.tabGroups, function (tabGroup) {
          var tabGroupID = tabGroup.getAttribute('id');

          if (!resetTabGroupIDsProcessed.includes(tabGroupID)) {
            resetTabGroupIDsProcessed.push(tabGroupID);
            var tabList = tabGroup.querySelector('.dcf-tabs > ol, .dcf-tabs > ul');
            tabList.dispatchEvent(new Event('resetTabGroup'));
          }
        });
      }
    });
  };

  window.addEventListener('hashchange', handleDCFTabsHashChange);

  var DCFTabs = /*#__PURE__*/function () {
    function DCFTabs(tabGroups) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, DCFTabs);

      this.tabGroups = tabGroups;
      this.tabHashLookup = {};
      this.useHashChange = true;

      if (options.useHashChange === false) {
        this.useHashChange = false;
      }

      dcfTabsObjects.push(this);
    } // Tab switching function


    _createClass(DCFTabs, [{
      key: "switchTab",
      value: function switchTab(oldTab, newTab) {
        var setPageHash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var scrollToPanel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (oldTab) {
          oldTab.removeAttribute('aria-selected');
          oldTab.setAttribute('tabindex', '-1'); // hide panel for oldTab

          var hidePanelID = oldTab.getAttribute('data-panel-id');

          if (hidePanelID) {
            var hidePanel = document.getElementById(hidePanelID);

            if (hidePanel) {
              hidePanel.hidden = true;
            }
          } // Focus on new tab


          this.focusTab(newTab);
        } // show panel for newTab


        var showPanelID = newTab.getAttribute('data-panel-id');

        if (showPanelID) {
          var showPanel = document.getElementById(showPanelID);

          if (showPanel) {
            showPanel.hidden = false;

            if (scrollToPanel) {
              showPanel.scrollIntoView();
            }
          } else {
            // eslint-disable-next-line no-console
            console.error("DCF Tabs: The tab panel with id ".concat(showPanelID, " is not associated with a tab."));
          }
        } else {
          var tabId = newTab.getAttribute('id'); // eslint-disable-next-line no-console

          console.error("DCF Tabs: The tab with id ".concat(tabId, " is missing panel href to map to panel."));
        }

        if (setPageHash) {
          // Set page hash
          this.setPageHash(newTab.getAttribute('href'));
        }
      }
    }, {
      key: "focusTab",
      value: function focusTab(tab) {
        tab.focus();
        tab.setAttribute('tabindex', '0');
        tab.setAttribute('aria-selected', 'true');
      }
    }, {
      key: "getCurrentTabByTab",
      value: function getCurrentTabByTab(tab) {
        var tabList = tab.parentNode.parentNode;
        var currentTab = null;

        if (tabList.tagName === 'OL' || tabList.tagName === 'UL') {
          currentTab = tabList.querySelector('[aria-selected]');
        }

        return currentTab;
      }
    }, {
      key: "isHash",
      value: function isHash(hash) {
        return hash && hash.substr(_dcfUtility.DCFUtility.magicNumbers('int0'), _dcfUtility.DCFUtility.magicNumbers('int1')) === '#';
      }
    }, {
      key: "setPageHash",
      value: function setPageHash(testHash) {
        // use clear hash if not valid hash
        var hash = this.isHash(testHash) ? testHash : ''; // set hash

        if (hash && history.pushState) {
          history.pushState(null, null, window.location.origin + window.location.pathname + hash);
        } else {
          location.hash = hash;
        }
      }
    }, {
      key: "displayTabByHash",
      value: function displayTabByHash(hash) {
        if (this.useHashChange && this.isHash(hash)) {
          if (hash && this.tabHashLookup[hash]) {
            var newTab = this.tabHashLookup[hash];
            var oldTab = this.getCurrentTabByTab(newTab);

            if (oldTab !== newTab) {
              this.switchTab(oldTab, newTab, false, true);
            } else {
              this.focusTab(newTab);
            }
          }
        }
      }
    }, {
      key: "initialize",
      value: function initialize() {
        var _this = this;

        Array.prototype.forEach.call(this.tabGroups, function (tabGroup) {
          // Define constants for tabs
          var tabList = tabGroup.querySelector('.dcf-tabs > ol, .dcf-tabs > ul');
          var tabs = tabList.querySelectorAll('a');
          var panels = tabGroup.querySelectorAll('.dcf-tabs > div, .dcf-tabs > section');

          var uuid = _dcfUtility.DCFUtility.uuidv4(); // Prefix each tab group with a unique ID.


          tabGroup.setAttribute('id', _dcfUtility.DCFUtility.checkSetElementId(tabGroup, uuid.concat('-tab-group'))); // Tab styling and functions.

          Array.prototype.forEach.call(tabs, function (tab, tabIndex) {
            // Add class to each tab
            tab.classList.add('dcf-tab', 'dcf-d-block'); // Prefix each tab within its parent tab group with the corresponding uuid.

            var nextTab = tabIndex + _dcfUtility.DCFUtility.magicNumbers('int1');

            tab.setAttribute('id', _dcfUtility.DCFUtility.checkSetElementId(tab, uuid.concat('-tab-', nextTab))); // Add role to each tab

            tab.setAttribute('role', 'tab'); // Add tabindex to each tab

            if (tabIndex === _dcfUtility.DCFUtility.magicNumbers('int0')) {
              tab.setAttribute('tabindex', '0');
              tab.setAttribute('aria-selected', 'true');
            } else {
              tab.setAttribute('tabindex', '-1');
              tab.removeAttribute('aria-selected');
            } // Add class to each tab's parent (list item)


            tab.parentNode.classList.add('dcf-tabs-list-item', 'dcf-mb-0'); // Add role to each tab's parent (list item)

            tab.parentNode.setAttribute('role', 'presentation');
            var tabHref = tab.getAttribute('href'); // Add tab to tabHashLookup

            if (_this.isHash(tabHref)) {
              tab.setAttribute('data-panel-id', tabHref.substring(_dcfUtility.DCFUtility.magicNumbers('int1')));
              _this.tabHashLookup[tabHref] = tab;
            } // Handle clicking of tabs for mouse users


            tab.addEventListener('click', function (clickEvent) {
              clickEvent.preventDefault();
              var currentTab = tabList.querySelector('[aria-selected]');

              if (clickEvent.currentTarget !== currentTab) {
                _this.switchTab(currentTab, clickEvent.currentTarget, _this.useHashChange);
              }
            }); // Handle keydown events for keyboard users

            tab.addEventListener('keydown', function (keydownEvent) {
              // Get the index of the current tab in the tabs node list
              var index = Array.prototype.indexOf.call(tabs, keydownEvent.currentTarget); // Work out which key the user is pressing and
              // Calculate the new tab's index where appropriate

              var dir = 0;

              if (_dcfUtility.DCFUtility.isKeyEvent(keydownEvent, _dcfUtility.DCFUtility.keyEvents('arrowLeft'))) {
                if (index > _dcfUtility.DCFUtility.magicNumbers('int0')) {
                  dir = index - _dcfUtility.DCFUtility.magicNumbers('int1');
                } else {
                  dir = tabs.length - _dcfUtility.DCFUtility.magicNumbers('int1');
                }
              } else if (_dcfUtility.DCFUtility.isKeyEvent(keydownEvent, _dcfUtility.DCFUtility.keyEvents('arrowRight'))) {
                if (index < tabs.length - _dcfUtility.DCFUtility.magicNumbers('int1')) {
                  dir = index + _dcfUtility.DCFUtility.magicNumbers('int1');
                }
              } else if (_dcfUtility.DCFUtility.isKeyEvent(keydownEvent, _dcfUtility.DCFUtility.keyEvents('arrowDown'))) {
                dir = 'down';
              } else {
                dir = null;
              }

              if (dir !== null) {
                keydownEvent.preventDefault(); // If the down key is pressed, move focus to the open panel,
                // otherwise switch to the adjacent tab

                if (dir === 'down') {
                  var tabPanelID = tab.getAttribute('data-panel-id');

                  if (tabPanelID) {
                    var tabPanel = document.getElementById(tabPanelID);

                    if (tabPanel) {
                      tabPanel.focus();
                    }
                  }
                } else if (tabs[dir]) {
                  _this.switchTab(keydownEvent.currentTarget, tabs[dir], false);
                }
              }
            }, false);
          }); // Add tab panel semantics and hide them all in each tab group.

          Array.prototype.forEach.call(panels, function (panel) {
            // Set role to each tab panel
            panel.setAttribute('role', 'tabpanel'); // Set tabindex to let panel be focused

            panel.setAttribute('tabindex', '-1'); // Add class to each tab panel

            panel.classList.add('dcf-tabs-panel'); // Hide all tab panels

            panel.hidden = true;
            var panelID = panel.getAttribute('id');

            if (panelID) {
              var panelTab = _this.tabHashLookup["#".concat(panelID)];

              if (panelTab) {
                // Declare which tab labels each panel
                panel.setAttribute('aria-labelledby', panelTab.getAttribute('id'));
                panel.addEventListener('keydown', function (keydownEvent) {
                  if (_dcfUtility.DCFUtility.isKeyEvent(keydownEvent, _dcfUtility.DCFUtility.keyEvents('arrowUp'))) {
                    panelTab.focus();
                    keydownEvent.stopPropagation();
                  }
                });
              }
            }
          }); // Add classes to tab list

          tabList.classList.add('dcf-tabs-list', 'dcf-list-bare', 'dcf-mb-0'); // Add role to the tab list

          tabList.setAttribute('role', 'tablist'); // Initially activate the first tab and reveal the first tab panel

          _this.switchTab(null, tabs[_dcfUtility.DCFUtility.magicNumbers('int0')], false);

          if (_this.useHashChange) {
            // Handle resetTabGroup on tabList
            tabList.addEventListener('resetTabGroup', function () {
              var newTab = tabs[_dcfUtility.DCFUtility.magicNumbers('int0')];

              var oldTab = _this.getCurrentTabByTab(newTab);

              if (oldTab !== newTab) {
                _this.switchTab(oldTab, newTab, false);
              }
            });
          }
        }); // Open tab on page load if valid

        if (this.useHashChange && window.location.hash) {
          this.displayTabByHash(window.location.hash);
        }
      }
    }]);

    return DCFTabs;
  }();

  _exports.DCFTabs = DCFTabs;
});
