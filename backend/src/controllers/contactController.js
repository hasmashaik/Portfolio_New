import prisma from '../config/database.js';

export const sendMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    if (message.length < 10) {
      return res.status(400).json({ error: 'Message must be at least 10 characters.' });
    }

    const result = await prisma.contactMessage.create({
      data: { name, email, subject, message },
    });

    res.status(201).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};