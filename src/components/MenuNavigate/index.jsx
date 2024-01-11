import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import { Text, Container, P } from './style';
import { useUser } from '../../hooks/UserContext';

export function MenuNavigate({ stylelight = false, dark = false }) {
  const { userData, userLogOut } = useUser();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const haveIngress = () => {
    const storedTicket = localStorage.getItem('clientTickets');
    if (storedTicket) {
      localStorage.removeItem('clientTickets');
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const purpleColor = '#7E52DE';

  const navigate = useNavigate();

  return (
    <Container>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {dark ? (
          <Text stylelight="true">
            {userData.name}
            <KeyboardArrowDownIcon />
          </Text>
        ) : (
          <Text>
            {userData.name}
            <KeyboardArrowDownIcon />
          </Text>
        )}
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
        {stylelight && (
          <MenuItem onClick={handleClose}>
            <P
              onClick={() => {
                navigate('/');
              }}
            >
              <HomeOutlinedIcon sx={{ color: purpleColor }} />
              Inicio
            </P>
          </MenuItem>
        )}
        <MenuItem onClick={handleClose}>
          <P
            onClick={() => {
              navigate('/meus-ingressos');
            }}
          >
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
          <P
            onClick={() => {
              navigate('/eventos');
              userLogOut();
              haveIngress();
            }}
          >
            <ExitToAppOutlinedIcon sx={{ color: purpleColor }} />
            Sair
          </P>
        </MenuItem>
      </Menu>
    </Container>
  );
}
