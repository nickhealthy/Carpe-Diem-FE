import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ToggleButton } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import OutletIcon from '@mui/icons-material/Outlet';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SentimentVeryDissatisfiedRoundedIcon from '@mui/icons-material/SentimentVeryDissatisfiedRounded';
import SickIcon from '@mui/icons-material/Sick';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { CARD_LIST_FILTER_EXPRESSION, CARD_LIST_FILTER_DATE } from '../../redux/types';
import { styled } from '@mui/material/styles';

const ToggleButtonss = styled(ToggleButton)(() => ({
    '&.Mui-selected, &.Mui-selected:hover': {
        color: 'white',
        backgroundColor: '#6666cc',
    },
}));

export default function IndeterminateCheckbox(props: any) {
    const dispatch = useDispatch();
    const { cardList } = useSelector((state: any) => state.cardList);
    const [option, setOption] = React.useState('Newest');
    const [checked, setChecked] = React.useState([true, true, true, true, true, true]);

    const handleChange = (event: any) => {
        setOption(event.target.value);
    };
    const handleChange1 = (event: any) => {
        setChecked([
            event.target.checked,
            event.target.checked,
            event.target.checked,
            event.target.checked,
            event.target.checked,
            event.target.checked,
        ]);
        if (checked[0] && checked[1] && checked[2] && checked[3] && checked[4] && checked[5]) {
            dispatch({
                type: CARD_LIST_FILTER_EXPRESSION,
                payload: { checked: [false, false, false, false, false, false] },
            });
            setOption('Newest');
        } else {
            dispatch({
                type: CARD_LIST_FILTER_EXPRESSION,
                payload: [true, true, true, true, true, true],
            });
        }
    };

    const handleChange2 = () => {
        setChecked([!checked[0], checked[1], checked[2], checked[3], checked[4], checked[5]]);
    };

    const handleChange3 = () => {
        setChecked([checked[0], !checked[1], checked[2], checked[3], checked[4], checked[5]]);
    };
    const handleChange4 = () => {
        setChecked([checked[0], checked[1], !checked[2], checked[3], checked[4], checked[5]]);
    };
    const handleChange5 = () => {
        setChecked([checked[0], checked[1], checked[2], !checked[3], checked[4], checked[5]]);
    };
    const handleChange6 = () => {
        setChecked([checked[0], checked[1], checked[2], checked[3], !checked[4], checked[5]]);
    };
    const handleChange7 = () => {
        setChecked([checked[0], checked[1], checked[2], checked[3], checked[4], !checked[5]]);
    };
    const expressions = ['happy', 'sad', 'angry', 'disgusted', 'fearful', 'surprised'];

    // setChecked([checked[0], checked[1], checked[2], checked[3], event.target.checked]);
    useEffect(() => {
        dispatch({
            type: CARD_LIST_FILTER_EXPRESSION,
            payload: { checked: checked },
        });
    }, [checked]);
    useEffect(() => {
        dispatch({
            type: CARD_LIST_FILTER_DATE,
            payload: { option: option },
        });
    }, [option]);
    useEffect(() => {
        setOption('Newest');
    }, []);
    const children = (
        // <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        //     <FormControlLabel label="Child 1" control={<Checkbox checked={checked[0]} onChange={handleChange2} />} />
        //     <FormControlLabel label="Child 2" control={<Checkbox checked={checked[1]} onChange={handleChange3} />} />
        //     <FormControlLabel label="Child 3" control={<Checkbox checked={checked[2]} onChange={handleChange4} />} />
        //     <FormControlLabel label="Child 4" control={<Checkbox checked={checked[3]} onChange={handleChange5} />} />
        // </Box>
        <Stack
            sx={{ mt: 4, pl: 10, p: 4, color: 'white', display: 'flex', justifyContent: 'center', alignContent: 'center' }}
            direction="row"
            spacing={2}
        >
            <FormControl sx={{ ml: -10, minWidth: 130 }}>
                <Select
                    value={option}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{ border: 1, borderColor: 'white', color: 'white' }}
                >
                    <MenuItem value={'Newest'}>Newest</MenuItem>
                    <MenuItem value={'Oldest'}>Oldest</MenuItem>
                </Select>
            </FormControl>
            <FormControlLabel
                label="ALL"
                control={
                    <Checkbox
                        checked={checked[0] && checked[1] && checked[2] && checked[3] && checked[4] && checked[5]}
                        style={{
                            color: 'white',
                        }}
                        onChange={handleChange1}
                    />
                }
                sx={{ mt: 3, ml: 3, paddingRight: '20px', border: '1px solid lightgrey', borderRadius: '2px' }}
            />
            <ToggleButtonss value="check" sx={{ color: 'white' }} selected={checked[0]} onChange={handleChange2}>
                <InsertEmoticonIcon /> Happy
            </ToggleButtonss>
            <ToggleButtonss value="check" sx={{ color: 'white' }} selected={checked[1]} onChange={handleChange3}>
                <SentimentDissatisfiedIcon />
                Sad
            </ToggleButtonss>
            <ToggleButtonss value="check" sx={{ color: 'white' }} selected={checked[2]} onChange={handleChange4}>
                <LocalFireDepartmentIcon /> Angry
            </ToggleButtonss>
            <ToggleButtonss value="check" sx={{ color: 'white' }} selected={checked[3]} onChange={handleChange5}>
                <SickIcon />
                Disgusted
            </ToggleButtonss>
            <ToggleButtonss value="check" sx={{ color: 'white' }} selected={checked[4]} onChange={handleChange6}>
                <SentimentVeryDissatisfiedRoundedIcon />
                Fearful
            </ToggleButtonss>
            <ToggleButtonss value="check" sx={{ color: 'white' }} selected={checked[5]} onChange={handleChange7}>
                <OutletIcon />
                Surprised
            </ToggleButtonss>
        </Stack>
    );

    return (
        <Box>
            {/* <FormControlLabel
                label="전체선택"
                control={
                    <Checkbox checked={checked[0] && checked[1] && checked[2] && checked[3] && checked[4] && checked[5]} onChange={handleChange1} />
                }
                sx={{ mt: 3, ml: 3 }}
            /> */}
            {children}
        </Box>
    );
}
