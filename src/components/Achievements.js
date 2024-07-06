import React from 'react';
import members from '@/assets/SVGs/members.svg';
import payments from '@/assets/SVGs/payments.svg';
import event_booking from '@/assets/SVGs/event_booking.svg';
import clubs from '@/assets/SVGs/clubs.svg';
import Image from 'next/image';

const Achievements = () => {
    const achievements = [
        {
            icon: members,
            label: "Members",
            figure: "2,245,341",
        },
        {
            icon: clubs,
            label: "Clubs",
            figure: "46,328",
        },
        {
            icon: event_booking,
            label: "Event Booking",
            figure: "828,867",
        },
        {
            icon: payments,
            label: "Payments",
            figure: "1,926,436",
        },
    ];

    return (
        <div className="bg-light-blue flex justify-evenly items-center py-[67px]">
            <div>
                <h1 className='font-semibold text-[36px] text-dark-gray'>Helping a local <br /><span className='text-green-500 text-green'>business reinvent itself</span></h1>
                <p className='text-dark-gray'>We reached here with our hard work and dedication</p>
            </div>
            <div className='flex flex-wrap justify-between w-[35%] gap-10'>
                {achievements.map((achievement, index) => (
                    <div key={index} className='w-[45%] flex gap-2 '>
                        <Image src={achievement.icon} height={48} width={48} alt='Achievements' />
                        <div>
                            <span className='font-bold text-[28px] text-dark-gray'>{achievement.figure}</span>
                            <p className='text-[16px] text-light-gray'>{achievement.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Achievements;
