import {useState, useEffect} from 'react'

const newYear = new Date().getFullYear() + 1
const timeNewYear = new Date(`01.01.${newYear}`).getTime()

const minutesMs = 1000 * 60
const hoursMs = minutesMs * 60
const daysMs = hoursMs * 24

const grammar = (count, unitL) => {
    let msg = ''
    if (count > 0 && unitL !== 's') {
        const check1 = (count) => {
            return count % 10 === 1 && count % 100 !== 11
        }
        const check2 = (count) => {
            const rest10 = count % 10
            return rest10 >= 2 && rest10 < 5 && !([12,13,14].includes(count))
        }
        let units = ''
        switch (unitL) {
            case 'd': if (check1(count)) {
                units = 'день'
            } else units = check2(count) ? 'дня' : 'дней'
                break;
            case 'h': units = 'часов';
                if ([2,3,4, 22, 23].includes(count)) { units = 'часа' } else
                if ([1,21].includes(count)) { units = 'час' }
                break;
            case 'm': units = 'минут';
                if (check1(count)) { units += 'a' }
                if (check2(count)) { units += 'ы' }
                break;
            case 's': units = 'секунд';
                if (check1(count)) { units += 'a' }
                if (check2(count)) { units += 'ы' }
                break;
        }
        msg = `${count} ${units}`
    }
    return msg
}

const calculate = (ms) => {
    const diff = timeNewYear - ms
    const days = Math.floor(diff / daysMs)
    const diffWithoutDays = diff - (days * daysMs)
    const hours = Math.floor(diffWithoutDays / hoursMs)
    const diffWithoutDays_n_Hours = diffWithoutDays - (hours * hoursMs)
    const minutes = Math.floor(diffWithoutDays_n_Hours / minutesMs)
    const seconds = Math.floor((diffWithoutDays_n_Hours - (minutes * minutesMs)) / 1000 )
    return `${grammar(days, 'd')} ${grammar(hours, 'h')} ${grammar(minutes, 'm')} ${grammar(seconds, 's')}`
}

export default function Timer() {
    const [count, setCount] = useState(new Date().getTime());

    useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c + 1000);
        }, 1000);
        return () => clearInterval(id);
    }, []);

    return <div>{ calculate(count) }</div>;
}
