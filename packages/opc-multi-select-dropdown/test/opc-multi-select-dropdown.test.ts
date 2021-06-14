import { axe, toHaveNoViolations } from 'jest-axe';
import { OpcMultiSelectDropdown } from '../src/opc-multi-select-dropdown';

expect.extend(toHaveNoViolations);

describe('opc-multi-select-dropdown', () => {

    const OPC_COMPONENT = 'opc-multi-select-dropdown';
    const ELEMENT_ID = 'opc-multi-select-dropdown';
    let opcElement: OpcMultiSelectDropdown;

    const getShadowRoot = (tagName: string): ShadowRoot => {
        return document.body.getElementsByTagName(tagName)[0].shadowRoot;
    }

    beforeEach(() => {
        opcElement = window.document.createElement(OPC_COMPONENT) as OpcMultiSelectDropdown;
        document.body.appendChild(opcElement);
    });

    afterEach(() => {
       document.body.getElementsByTagName(OPC_COMPONENT)[0].remove();
    });

    it('is defined', async () => {
        expect(opcElement).toBeDefined();
    });

    it('has no axe violations', async () => {
        expect(await axe(opcElement)).toHaveNoViolations()
    });

    // Add more tests here
});
