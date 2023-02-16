import moment from 'moment';

const apiUrl = 'https://dashboard.elering.ee/api';

// Создаём запрос: на запрашивание информации

export async function getPriceData() {
    const start = moment().subtract(10, 'hours').format();
    const end = moment().add(30, 'hours').format();

    const params = new URLSearchParams({
        start,
        end,
    });

    const response = await fetch(`${apiUrl}/nps/price?${params}`);

    return response.json();
}