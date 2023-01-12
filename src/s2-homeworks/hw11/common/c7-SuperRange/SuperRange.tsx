import React from 'react'
import {Slider, SliderProps} from '@mui/material'


const SuperRange: React.FC<SliderProps> = (props) => {

    return (
        <>
            <Slider
                sx={{ // стили для слайдера // пишет студент
                    width: '200px',
                    margin: '0 10px',
                    color: '#00CC22',
                    '& .MuiSlider-thumb': {
                        color: '#fff',
                        border: '2px solid #00CC22'
                    },
                    '& .MuiSlider-rail': {
                        border: '2px solid #8B8B8B'
                    },
                    '& .MuiSlider-thumb:before': {
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#00CC22'
                    },

                }}
                value={props.value}
                onChange={props.onChange}
                {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
            />
        </>
    )
}

export default SuperRange;

// const SuperRange: React.FC<SliderProps> = (props) => {
//     return (
//         <Slider
//             sx={{ // стили для слайдера // пишет студент
//                 width: '200px'
//             }}
//             {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
//         />
//     )
// }
//
// export default SuperRange
