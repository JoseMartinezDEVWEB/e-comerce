const prisma = require('../utils/prisma');

/**
 * @function getAppConfig
 * @description Obtiene la configuración visual actual de la aplicación.
 */
exports.getAppConfig = async (req, res) => {
    try {
        const config = await prisma.appConfig.findFirst();
        if (!config) {
            // Retornar valores por defecto si no existe configuración en DB
            return res.json({
                primaryColor: "#000000",
                secondaryColor: "#ffffff",
                animationType: "fade",
                logoUrl: null,
                bannerUrl: null
            });
        }
        res.json(config);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la configuración', detalles: error.message });
    }
};

/**
 * @function updateAppConfig
 * @description Actualiza o crea la configuración visual (Solo OWNER/ADMIN).
 */
exports.updateAppConfig = async (req, res) => {
    try {
        const { primaryColor, secondaryColor, animationType, logoUrl, bannerUrl } = req.body;

        const existingConfig = await prisma.appConfig.findFirst();

        let config;
        if (existingConfig) {
            config = await prisma.appConfig.update({
                where: { id: existingConfig.id },
                data: { primaryColor, secondaryColor, animationType, logoUrl, bannerUrl }
            });
        } else {
            config = await prisma.appConfig.create({
                data: { primaryColor, secondaryColor, animationType, logoUrl, bannerUrl }
            });
        }

        res.json({ mensaje: 'Configuración actualizada con éxito', config });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la configuración', detalles: error.message });
    }
};
