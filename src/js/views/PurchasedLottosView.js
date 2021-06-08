import { getEl, getEls } from '../utils.js';
import { lottoTemplate } from '../templates.js';

import View from './View.js';

class PurchasedLottosView extends View {
    constructor(targetEl) {
        super(targetEl);
        this.init();
    }

    init() {
        getEl('#lotto-switch').addEventListener('change', this.changeSwitchHandler.bind(this));
    }

    reset() {
        getEl('#lotto-switch').checked = false;
        this.hideLottoDetails();
        return this;
    }

    changeSwitchHandler({ target: { checked } }) {
        if (checked) return this.showLottoDetails();
        this.hideLottoDetails();
    }

    showLottoDetails() {
        getEl('#lotto-icons').classList.add('flex-col');
        getEls('.lotto-detail').forEach(el => el.style.display = 'inline');
    }

    hideLottoDetails() {
        getEl('#lotto-icons').classList.remove('flex-col');
        getEls('.lotto-detail').forEach(el => el.style.display = 'none');
    }

    renderLottos(lottos) {
        getEl('#total-purchased').innerText = lottos.length;
        getEl('#lotto-icons').innerHTML = lottos.map(lotto => lottoTemplate(lotto)).join('');
    }
}

export default PurchasedLottosView
