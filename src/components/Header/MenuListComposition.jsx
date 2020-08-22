import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Button, Grow, Paper, Popper, MenuItem, MenuList, Grid, Link }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    iconMenuColor: {
        color: "#7d7d7d",
    },
    styleMenu: {
        zIndex: 9, 
        width: "100%"
    },
}));

const MenuListComposition = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };


   const handleListKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }


    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <>
            <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <MenuIcon style={{ color: "#7d7d7d" }} fontSize="large" justifyContent="flex-end"/>
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition className={classes.styleMenu}>
                {({ TransitionProps, placement }) => (
                    <Grow className={classes.styleMenu}
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} style={{backgroundColor: "#FFFFFF" }}>
                                    <MenuItem onClick={handleClose}><Link href="/ficha-clinica" style={{textDecoration: "none", color: "#7d7d7d"}} >FICHA CLÍNICA</Link></MenuItem>
                                    <MenuItem onClick={handleClose}><Link href="/historial-medico" style={{textDecoration: "none", color: "#7d7d7d"}}>HISTORIAL MÉDICO</Link></MenuItem>
                                    <MenuItem onClick={handleClose}><Link href="/controles-y-citas-medicas" style={{textDecoration: "none", color: "#7d7d7d"}}>CONTROLES Y CITAS MÉDICAS</Link></MenuItem>
                                    <MenuItem onClick={handleClose}><Link href="/recetas-y-examenes" style={{textDecoration: "none", color: "#7d7d7d"}}>RECETAS Y EXÁMENES</Link></MenuItem>
                                    <MenuItem onClick={handleClose}><Link href="/información-de-interes" style={{textDecoration: "none", color: "#7d7d7d"}}>INFORMACIÓN DE INTERÉS</Link></MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                    </Grow>
                )}
            </Popper>
        </>
    );
}

export default MenuListComposition;