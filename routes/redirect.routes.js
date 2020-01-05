const {Router} = require('express');
const Link = require('../models/Link');
const router = Router();


router.get('/:code', async (req, res) => {
   try {

       const link = await Link.findOne({ code: req.params.code });

       if (link) {
            link.clicks++;
           return res.redirect(link.from);
       }

       res.status(404).json('Посилання не знайдено');

   } catch (e) {
        res.status(500).json({ message: 'Щось пішло не такб спробуйте ще раз' });
   }
});

module.exports = router;
