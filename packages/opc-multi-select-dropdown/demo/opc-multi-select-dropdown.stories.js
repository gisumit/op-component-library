import '../dist/opc-multi-select-dropdown';
import readme from '../README.md';

export default {
    title: 'OpcMultiSelectDropdown',
    parameters: {
        notes: { readme },
    }
}

export const Primary = () => `
<opc-multi-select-dropdown></opc-multi-select-dropdown>
`;

Primary.storyName = `OpcMultiSelectDropdown`;
