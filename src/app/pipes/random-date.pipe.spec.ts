import { RandomDatePipe } from './random-date.pipe';

describe('RandomDatePipe', () => {
  it('create an instance', () => {
    const pipe = new RandomDatePipe();
    expect(pipe).toBeTruthy();
  });
});
