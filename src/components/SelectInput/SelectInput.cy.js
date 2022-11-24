import SelectInput from "./SelectInput";
const orderOptions = [
    { label: "Default", value: "Default" },
    { label: "Ascending", value: "Ascending" },
    { label: "Descending", value: "Descending" },
  ];

describe('<SelectInput>', () => {
    it('mount', () => {
        // eslint-disable-next-line no-undef
        cy.mount(<SelectInput options={orderOptions}/>)
    })
})