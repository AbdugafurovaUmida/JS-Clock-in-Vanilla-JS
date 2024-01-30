// const secondHand = document.querySelector('.second-hand');
// const minuteHand = document.querySelector('.minute-hand');
// const hourHand = document.querySelector('.hour-hand');

// function setDate() {
// 	const time = new Date();
// 	const seconds = time.getSeconds();
// 	const minutes = time.getMinutes();
// 	const hours = time.getHours();

// 	// const secondsDegree = Math.trunc((seconds / 60) * 360);
// 	// const minutesDegree = Math.trunc((minutes / 60) * 360);
// 	// const hourDegree = Math.trunc((hours / 12) * 360);

//     const secondDegrees = ((seconds / 60) * 360);
//     const minsDegrees = ((minutes / 60) * 360) + 90;
//     const hourDegrees = ((hours / 12) * 360) + 90;

// 	secondHand.style.transform = `rotate(${secondDegrees}deg)`;
// 	minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
// 	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
// }
// setInterval(setDate, 1000);


        const secondHand = document.querySelector('.second-hand');
        const minsHand = document.querySelector('.min-hand');
        const hourHand = document.querySelector('.hour-hand');

        function setDate() {
            const now = new Date();


            const seconds = now.getSeconds();
            const secondDegrees = ((seconds / 60) * 360) + 90;
            secondHand.style.transform = `rotate(${secondDegrees}deg)`;


            const mins = now.getMinutes();
            const minsDegrees = mins  + 63;
            minsHand.style.transform = `rotate(${minsDegrees}deg)`

            const hour = now.getHours();
            const hourDegrees = hour - 63;
            hourHand.style.transform = `rotate(${hourDegrees}deg)`

        }


        setInterval(setDate, 1000);