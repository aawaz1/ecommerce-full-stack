import paymentService from  '.././config/Services/paymentService.js';
export const createPaymentLink = async(req,res) => {
    try {
        const paymentLink = await paymentService.createPaymentLink(req.params.id);
        return res.status(200).send(paymentLink);
    } catch (error) {
        return res.status(500).send(error.message)
        
    }

}

export const updatePaymentInformation = async(req,res) => {
    try {
        await paymentService.updatePaymentInformation(req.query);
        return res.status(200).send({
            message: "Payment Information Updated",
            status: true,
        });
    } catch (error) {
        return res.status(500).send(error.message)
        
    }

}

