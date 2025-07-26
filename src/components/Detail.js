import React from 'react'
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {

    const {id, bodyPart, name, target, equipment} = exerciseDetail;

    const resolution = "180";
    // const imageUrl = id ? `http://localhost:5000/api/image/${id}?resolution=${resolution}` : '';
    const imageUrl = id ? `https://my-exercise-fitness-app-backend.onrender.com/api/image/${id}?resolution=${resolution}` : '';

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
        <img src={imageUrl} alt={name} loading="lazy" className="detail-image" />

        <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>

            <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
                {name}
            </Typography>

            <Typography variant='h5' sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
                Exercises keep you strong.{' '}
                <span style={{ textTransform: 'capitalize' }}>{name}</span> is one of the most effective exercises to target your {target}. 
                <br /> <br />It not only helps build strength but also boosts your mood and energy levels, keeping you active and motivated.
            </Typography>

            {extraDetail.map((item, index) => (
                <Stack key={`${item.name}-${index}`} direction="row" gap="24px" alignItems="center">

                    <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
                        <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
                    </Button>

                    <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                        {item.name || ''}
                    </Typography>

                </Stack>
            ))}

        </Stack>
    </Stack>
  )

}

export default Detail