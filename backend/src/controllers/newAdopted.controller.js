import NewAdopted from '../dao/mongo/models/newAdoptedModels.js';
import { transporter } from '../config/nodemailer.js';
import config from '../config/config.js';

export const createNewAdopted = async (req, res) => {
    try {
        const { name, email, phone, message, mascotaid } = req.body;
        const newAdopted = new NewAdopted({ name, email, phone, message, mascotaid });
        await newAdopted.save();

        // Configuración del correo con HTML
        const mailOptions = {
            from: config.emailuser,
            to: email,
            subject: '¡Te acompañamos en esta nueva etapa!',
            html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <h1 style="color: #4CAF50;">¡Te acompañamos en esta nueva etapa!</h1>
                    <p>REQUISITOS PARA ADOPTAR</p>
                    <ul>
                        <li>Ser mayor de 21 años.</li>
                        <li>Amar a las mascotas y poder dedicarle el tiempo que necesite.</li>
                        <li>Querer sumar un integrante a tu vida por el resto de la suya, sin importar los cambios que se presenten.</li>
                        <li>Estar bien predispuesto: te pedimos cargues tu solicitud, realices una entrevista con el especialista y respondas a nuestro contacto.</li>
                        <li>Comprometerse con el cuidado, la salud y la castración de la mascota.</li>
                    </ul>
                    <p>¡Gracias por querer darle un hogar a una mascota!</p>
                </div>
            `
        };

        // Enviar el correo
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error al enviar el correo:', error);
                return res.status(500).json({ message: 'Error al enviar el correo' });
            }
            console.log('Correo enviado:', info.response);
        });

        res.status(201).json(newAdopted);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getNewAdopted = async (req, res) => {
    try {
        const newAdopted = await NewAdopted.find();
        res.status(200).json(newAdopted);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteNewAdopted = async (req, res) => {
    try {
        const { id } = req.params;
        const newAdopted = await NewAdopted.findByIdAndDelete(id);
        res.status(200).json(newAdopted);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
