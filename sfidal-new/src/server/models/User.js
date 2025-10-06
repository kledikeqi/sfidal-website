import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Emri është i nevojshëm.'],
    },
    email: {
        type: String,
        required: [true, 'Email-i është i nevojshëm.'],
        unique: true, // Siguron që nuk ka dy përdorues me të njëjtin email
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Fjalëkalimi është i nevojshëm.'],
    },
    isAdmin: { // Për të dalluar përdoruesit e thjeshtë nga administratorët
        type: Boolean,
        required: true,
        default: false,
    }
}, {
    timestamps: true // Shton fushat createdAt dhe updatedAt
});

// ⚠️ METODA E Bcrypt (Enkriptimi i Fjalëkalimit)
// Ky funksion ekzekutohet PARA se të ruhet përdoruesi në DB
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next(); // Nëse fjalëkalimi nuk është ndryshuar, vazhdo
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// ⚠️ METODA E KRAHASIMIT
// Shton një metodë për të krahasuar fjalëkalimin e dhënë me fjalëkalimin e enkriptuar
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


const User = mongoose.model('User', userSchema);

export default User;