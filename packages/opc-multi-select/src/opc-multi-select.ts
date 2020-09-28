import { LitElement, html, property, customElement } from 'lit-element';
import style  from './opc-multi-select.scss';

@customElement('opc-multi-select')
export class OpcMultiSelect extends LitElement {


  static get styles() {
    return [ style ];
  }

  render() {
    return html`
      <link rel="stylesheet" href="https://unpkg.com/@patternfly/patternfly/patternfly.css" crossorigin="anonymous">
      <div class="pf-c-select pf-m-expanded">
        <span id="select-checkbox-expanded-selected-label" hidden>Choose one</span>
        <button class="pf-c-select__toggle" type="button" id="select-checkbox-expanded-selected-toggle" aria-haspopup="true" aria-expanded="true" aria-labelledby="select-checkbox-expanded-selected-label select-checkbox-expanded-selected-toggle">
          <div class="pf-c-select__toggle-wrapper">
            <span class="pf-c-select__toggle-text">Filter by status</span>
          </div>
          <span class="pf-c-select__toggle-arrow">
            <i class="fas fa-caret-down" aria-hidden="true"></i>
          </span>
        </button>
        <div class="pf-c-select__menu">
          <div class="pf-c-select__menu-group">
            <div class="pf-c-select__menu-group-title" aria-hidden="true" id="select-checkbox-expanded-selected-group-status">Status</div>
            <fieldset class="pf-c-select__menu-fieldset" aria-labelledby="select-checkbox-expanded-selected-group-status">
              <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-selected-running">
                <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-running" name="running" />
                <span class="pf-c-check__label">Running</span>
              </label>
              <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-selected-stopped">
                <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-stopped" name="stopped" checked />
                <span class="pf-c-check__label">Stopped</span>
              </label>
              <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-selected-down">
                <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-down" name="down" checked />
                <span class="pf-c-check__label">Down</span>
              </label>
              <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-selected-degraded">
                <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-degraded" name="degraded" />
                <span class="pf-c-check__label">Degraded</span>
              </label>
              <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-selected-needsMaintenance">
                <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-needsMaintenance" name="needsMaintenance" checked />
                <span class="pf-c-check__label">Needs maintenance</span>
              </label>
            </fieldset>
          </div>
          <div class="pf-c-select__menu-group">
            <div class="pf-c-select__menu-group-title" aria-hidden="true" id="select-checkbox-expanded-selected-group-vendor">Vendor</div>
            <fieldset class="pf-c-select__menu-fieldset" aria-labelledby="select-checkbox-expanded-selected-group-vendor">
              <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-selected-dell">
                <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-dell" name="dell" />
                <span class="pf-c-check__label">Dell</span>
              </label>
              <label class="pf-c-check pf-c-select__menu-item pf-m-disabled" for="select-checkbox-expanded-selected-samsung">
                <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-samsung" name="samsung" disabled />
                <span class="pf-c-check__label pf-m-disabled">Samsung</span>
              </label>
              <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-selected-hp">
                <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-hp" name="hp" />
                <span class="pf-c-check__label">Hewlett-Packard</span>
              </label>
            </fieldset>
          </div>
        </div>
      </div>
    `;
  }
}
