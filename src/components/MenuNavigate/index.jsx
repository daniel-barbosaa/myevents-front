import * as React from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import { Text, Container, P } from './style';

export function MenuNavigate() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const purpleColor = '#7E52DE';

  return (
    <Container>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Text>
          Daniel barbosa
          <KeyboardArrowDownIcon />
        </Text>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <P>
            <ConfirmationNumberOutlinedIcon sx={{ color: purpleColor }} />
            Ingressos
          </P>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <P>
            <HelpOutlineOutlinedIcon sx={{ color: purpleColor }} />
            Central de ajuda
          </P>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <P>
            <ExitToAppOutlinedIcon sx={{ color: purpleColor }} />
            Sair
          </P>
        </MenuItem>
      </Menu>
    </Container>
  );
}
