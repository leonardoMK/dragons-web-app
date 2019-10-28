import { formatDate } from "../../helpers";

describe('Test helpers', () => {
  it('Should render correctly Date', () => {
    expect(formatDate(1572209441458)).toEqual('27/10/2019');
  });

  it('Should render correctly Date', () => {
    expect(formatDate('2019-05-09T12:00:00.000')).toEqual('09/05/2019');
  });
});