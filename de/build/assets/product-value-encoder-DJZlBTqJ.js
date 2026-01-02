const t = {
        Input: "input",
        Select: "select",
        Choices: "choices"
    },
    r = {
        Area: "area",
        City: "city",
        HouseNumber: "house_number",
        State: "state",
        StreetAddress: "street_address",
        Street: "street",
        Zip: "zip"
    },
    s = {
        Installments: "installments",
        ...r
    },
    i = {
        StandardDelivery: "standard-delivery",
        ExpressDelivery: "express-delivery",
        DirlLogisticsParcelDelivery: "dir-logistics-parcel-delivery",
        InpostParcelDelivery: "inpost-parcel-delivery",
        AustraliaPostParcelDelivery: "australia-post-parcel-delivery",
        GlsParcelDelivery: "gls-parcel-delivery",
        CodServiceFee: "cod-service-fee",
        StandardDeliveryWithWarranty: "standard-delivery-with-warranty"
    };

function a(e) {
    return JSON.stringify([e.id, e.price, e.quantity, e.name, e.options || {}, e.currency, e.subscriptionPlan, e.taxes, e.oldPrice, e.relatedProducts])
}
export {
    r as D, t as I, i as P, s as a, a as e
};