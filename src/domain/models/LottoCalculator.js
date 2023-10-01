class LottoCalculator {
  #winningLottoNumber = [];
  #bonusNumber = 0;

  constructor(winningLottoNumber, bonusNumber) {
    this.#winningLottoNumber = winningLottoNumber;
    this.#bonusNumber = bonusNumber;
  }

  #getMatchLottoNumberCount(lottoNumber) {
    return this.#winningLottoNumber.reduce((count, number) => (lottoNumber.includes(number) ? count + 1 : count), 0);
  }

  calculateLottoMatchCounts(lottoNumber) {
    const matchLottoNumberCount = this.#getMatchLottoNumberCount(lottoNumber);
    const matchBonusNumberCount = lottoNumber.includes(this.#bonusNumber) ? 1 : 0;
    return { matchLottoNumberCount, matchBonusNumberCount };
  }

  calculateWinningReturnRate(totalCost, totalPrize) {
    return ((totalPrize - totalCost) / totalCost) * 100;
  }
}

export default LottoCalculator;
