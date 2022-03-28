import { formatTimeStrings } from "../utils/formatTimeString";


describe('formatTimeString tests', () => {

    it('returns None if no opening hours passed', () => {
        const openingHours = [];
        const expected = 'None';
        const received = formatTimeStrings(openingHours);

        expect(received).toEqual(expected);
    });

    it("returns 'start - Till tomorrow' if only one opening hour passed", () => {
        const openingHours = ['08:00'];
        const expected = `${openingHours[0]} - Till tomorrow`;
        const received = formatTimeStrings(openingHours);

        expect(received).toEqual(expected);
    });

    it("returns 'start - end' if more than one opening hour passed", () => {
        const openingHours = ['08:00', '23:00'];
        const expected = `${openingHours[0]} - ${openingHours[1]}`;
        const received = formatTimeStrings(openingHours);

        expect(received).toEqual(expected);
    });
});
