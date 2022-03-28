import { render } from "@testing-library/react"
import TestComponent from "../components/TestComponent"


describe('we want to test component', () => {

    it('we want to compare snapshots', () => {
        const view = render(<TestComponent />);
        expect(view).toMatchSnapshot();
    })
});
