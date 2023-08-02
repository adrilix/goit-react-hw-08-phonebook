import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLogOutStyled, UserMenuStyled } from './UserMenuStyled';

function UserMenu({userName, handleLogOut}) {
    return (
        <UserMenuStyled>
            <p>
                акаунт <b>{userName}</b>
            </p>
            <ButtonLogOutStyled onClick={handleLogOut} type="button">
                Log out
            </ButtonLogOutStyled>
        </UserMenuStyled>
    );
}

UserMenu.propTypes = {
    userName: PropTypes.string.isRequired,
    handleLogOut: PropTypes.func.isRequired,
}

export default UserMenu;
