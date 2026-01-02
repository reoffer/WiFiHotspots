class o {
    constructor(t, n = !1) {
        this.id = t.id, this.productId = t.product_id, this.label = t.label, this.checked = n ? !1 : t.checked, this.count = t.count, this.price = t.price, this._priceFormatted = t.price_formatted, this.unitOriginalPrice = t.unit_original_price, this._unitOriginalPriceFormatted = t.unit_original_price_formatted, this.totalPrice = t.total_price, this._totalPriceFormatted = t.total_price_formatted, this.totalPriceBeforeCoupon = t.total_price_before_coupon, this.totalPriceBeforeCouponFormatted = t.total_price_before_coupon_formatted, this.originalPrice = t.original_price, this._originalPriceFormatted = t.original_price_formatted, this.subscriptionPrice = t.subscription_price, this.subscriptionPriceFormatted = t.subscription_price_formatted, this.currency = t.currency, this.convertedFromCurrency = t.converted_from_currency, this._discountApplied = t.discount_applied, this.discountPercentage = t.discount_percentage, this.discountPercentageFormatted = t.discount_percentage_formatted, this.attributes = t.attributes, this.labelPriceTemplate = t.label_price_template, this.hasGift = t ? .has_gift, this.imagesPath = t ? .images_path, this._totalPriceFormattedByPeriod = t ? .total_price_formatted_by_period, this._unitTotalPriceByPeriodFormatted = t ? .unit_total_price_by_period_formatted, this._unitOriginalPriceByPeriodFormatted = t ? .unit_original_price_by_period_formatted, this.period = t ? .period, this.itemsInPackage = t ? .items_in_package, this._originalPriceFormattedByPeriod = t ? .original_price_formatted_by_period, this.text = t ? .text, this.relatedProducts = t.related_pricing_items ? t.related_pricing_items.map(e => new o(e)) : [], this.intervalCount = t.interval_count, this.intervalType = t.interval_type, this.installmentPeriods = t.installment_periods ? Object.keys(t.installment_periods).reduce((e, r) => {
            const i = t.installment_periods[r];
            return e[r] = {
                priceFormatted: i.price_formatted,
                totalPriceFormatted: i.total_price_formatted,
                originalPriceFormatted: i.original_price_formatted,
                unitOriginalPriceFormatted: i.unit_original_price_formatted,
                discountApplied: i.discount_applied,
                totalPriceFormattedByPeriod: i.total_price_formatted_by_period ? ? null,
                unitTotalPriceByPeriodFormatted: i.unit_total_price_by_period_formatted ? ? null,
                unitOriginalPriceByPeriodFormatted: i.unit_original_price_by_period_formatted ? ? null,
                originalPriceFormattedByPeriod: i.original_price_formatted_by_period ? ? null
            }, e
        }, {}) : [], this.activeInstallmentPeriod = null
    }
    isFree() {
        return parseFloat(this.price) === 0
    }
    isSubscription() {
        return !!this.intervalCount
    }
    isCouponDiscountApplied() {
        return this.totalPrice !== this.totalPriceBeforeCoupon
    }
    get priceFormatted() {
        const t = this.activeInstallmentPeriod === 0 || this.activeInstallmentPeriod === null ? 1 : this.activeInstallmentPeriod;
        return t && this.installmentPeriods[t] ? this.installmentPeriods[t].priceFormatted : this.installmentPeriods[1] ? this.installmentPeriods[1].priceFormatted : this._priceFormatted
    }
    set priceFormatted(t) {
        this._priceFormatted = t
    }
    get totalPriceFormatted() {
        const t = this.activeInstallmentPeriod === 0 || this.activeInstallmentPeriod === null ? 1 : this.activeInstallmentPeriod;
        return t && this.installmentPeriods[t] ? this.installmentPeriods[t].totalPriceFormatted : this.installmentPeriods[1] ? this.installmentPeriods[1].totalPriceFormatted : this._totalPriceFormatted
    }
    set totalPriceFormatted(t) {
        this._totalPriceFormatted = t
    }
    get originalPriceFormatted() {
        const t = this.activeInstallmentPeriod === 0 || this.activeInstallmentPeriod === null ? 1 : this.activeInstallmentPeriod;
        return t && this.installmentPeriods[t] ? this.installmentPeriods[t].originalPriceFormatted : this.installmentPeriods[1] ? this.installmentPeriods[1].originalPriceFormatted : this._originalPriceFormatted
    }
    set originalPriceFormatted(t) {
        this._originalPriceFormatted = t
    }
    get unitOriginalPriceFormatted() {
        const t = this.activeInstallmentPeriod === 0 || this.activeInstallmentPeriod === null ? 1 : this.activeInstallmentPeriod;
        return t && this.installmentPeriods[t] ? this.installmentPeriods[t].unitOriginalPriceFormatted : this.installmentPeriods[1] ? this.installmentPeriods[1].unitOriginalPriceFormatted : this._unitOriginalPriceFormatted
    }
    set unitOriginalPriceFormatted(t) {
        this._unitOriginalPriceFormatted = t
    }
    get discountApplied() {
        const t = this.activeInstallmentPeriod === 0 || this.activeInstallmentPeriod === null ? 1 : this.activeInstallmentPeriod;
        return t && this.installmentPeriods[t] ? this.installmentPeriods[t].discountApplied : this.installmentPeriods[1] ? this.installmentPeriods[1].discountApplied : this._discountApplied
    }
    set discountApplied(t) {
        this._discountApplied = t
    }
    get totalPriceFormattedByPeriod() {
        const t = this.activeInstallmentPeriod === 0 || this.activeInstallmentPeriod === null ? 1 : this.activeInstallmentPeriod;
        return t && this.installmentPeriods[t] ? this.installmentPeriods[t].totalPriceFormattedByPeriod : this.installmentPeriods[1] ? this.installmentPeriods[1].totalPriceFormattedByPeriod : this._totalPriceFormattedByPeriod
    }
    set totalPriceFormattedByPeriod(t) {
        this._totalPriceFormattedByPeriod = t
    }
    get unitOriginalPriceByPeriodFormatted() {
        const t = this.activeInstallmentPeriod === 0 || this.activeInstallmentPeriod === null ? 1 : this.activeInstallmentPeriod;
        return t && this.installmentPeriods[t] ? this.installmentPeriods[t].unitOriginalPriceByPeriodFormatted : this.installmentPeriods[1] ? this.installmentPeriods[1].unitOriginalPriceByPeriodFormatted : this._unitOriginalPriceByPeriodFormatted
    }
    set unitOriginalPriceByPeriodFormatted(t) {
        this._unitOriginalPriceByPeriodFormatted = t
    }
    get unitTotalPriceByPeriodFormatted() {
        const t = this.activeInstallmentPeriod === 0 || this.activeInstallmentPeriod === null ? 1 : this.activeInstallmentPeriod;
        return t && this.installmentPeriods[t] ? this.installmentPeriods[t].unitTotalPriceByPeriodFormatted : this.installmentPeriods[1] ? this.installmentPeriods[1].unitTotalPriceByPeriodFormatted : this._unitTotalPriceByPeriodFormatted
    }
    set unitTotalPriceByPeriodFormatted(t) {
        this._unitTotalPriceByPeriodFormatted = t
    }
    get originalPriceFormattedByPeriod() {
        const t = this.activeInstallmentPeriod === 0 || this.activeInstallmentPeriod === null ? 1 : this.activeInstallmentPeriod;
        return t && this.installmentPeriods[t] ? this.installmentPeriods[t].originalPriceFormattedByPeriod : this.installmentPeriods[1] ? this.installmentPeriods[1].originalPriceFormattedByPeriod : this._originalPriceFormattedByPeriod
    }
    set originalPriceFormattedByPeriod(t) {
        this._originalPriceFormattedByPeriod = t
    }
}
export {
    o as C
};