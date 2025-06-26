// deploy-commands.js

require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'دروستکردن',
        description: 'ئیمەیڵێکی کاتی (فەیک) دروست دەکات.',
    },
    {
        name: 'نامەکان',
        description: 'نامەکانی ناو ئیمەیڵێکی دیاریکراو نیشان دەدات.',
        options: [
            {
                name: 'ئیمەیڵ',
                description: 'ئەو ئیمەیڵەی دەتەوێت بیپشکنیت',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ],
    },
    {
        name: 'خوێندنەوە',
        description: 'ناوەڕۆکی نامەیەکی دیاریکراو دەخوێنێتەوە.',
        options: [
            {
                name: 'ئیمەیڵ',
                description: 'ئەو ئیمەیڵەی نامەکەی تێدایە',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'نامە_ئایدی',
                description: 'ئایدی ئەو نامەیەی دەتەوێت بیخوێنیتەوە',
                type: ApplicationCommandOptionType.Integer,
                required: true,
            },
        ],
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log('دەستکرا بە نوێکردنەوەی فرمانەکان (/).');

        // پێویستت بە Client IDی بۆتەکەتە
        // دەتوانیت لە Discord Developer Portal > General Information بیهێنیت
        const clientId = 'YOUR_CLIENT_ID_HERE'; 

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands }
        );

        console.log('فرمانەکان (/) بە سەرکەوتوویی نوێکرانەوە.');
    } catch (error) {
        console.error(error);
    }
})();