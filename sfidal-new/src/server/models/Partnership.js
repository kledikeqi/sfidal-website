import mongoose from 'mongoose';

// Definicioni i Skemës
const partnershipSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: [true, 'Emri i kompanisë është i nevojshëm.'],
        trim: true,
        maxlength: 100
    },
    contactPerson: {
        type: String,
        required: [true, 'Emri i kontaktit është i nevojshëm.'],
        trim: true,
        maxlength: 100
    },
    email: {
        type: String,
        required: [true, 'Email-i është i nevojshëm.'],
        match: [/.+@.+\..+/, 'Ju lutem jepni një adresë email-i të vlefshme.'],
        lowercase: true,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
        maxlength: 30,
        default: 'Nuk u dha'
    },
    requestType: {
        type: String,
        enum: ['NewProduction', 'CapacityCheck', 'MaterialSourcing', 'Other'],
        required: [true, 'Lloji i kërkesës është i nevojshëm.'],
    },
    message: {
        type: String,
        required: [true, 'Mesazhi me detajet e projektit është i nevojshëm.'],
        maxlength: 2000
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Krijimi i Modelit
const Partnership = mongoose.model('Partnership', partnershipSchema);

export default Partnership;