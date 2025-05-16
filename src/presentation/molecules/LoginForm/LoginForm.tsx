'use client'
import React, { useState } from 'react';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Label  from '../../atoms/Label/Label';
import TogglePasswordButton from "@/presentation/atoms/TogglePasswordButton/TogglePasswordButton";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        alert(`Logging in with Email: ${email}`);
    };

    const handleMicrosoftLogin = () => {
        alert('Logging in with Microsoft');
    };
    const toggleShowPassword = () => {
        setShowPassword(prev => !prev);
    };


    return (
        <div>
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <div
                style={{
                    position: 'relative',
            }}>
                <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <TogglePasswordButton show={showPassword} onToggle={toggleShowPassword}  />
            </div>
            <Label text="Quên mật khẩu ?" />
            <Button label="Login" onClick={handleLogin} variant='primary' />
            <Button label="Login with Microsoft" onClick={handleMicrosoftLogin} variant="secondary" iconSrc={'/assets/logos/micrs.png'}/>
        </div>
    );
};

export default LoginForm;