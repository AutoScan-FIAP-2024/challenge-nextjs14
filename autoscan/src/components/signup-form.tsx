"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function SignupForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    setError('');
    setLoading(true);

    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setError(result.message || 'Erro ao cadastrar.');
      }
    } catch (err) {
      console.error('Erro no cadastro:', err);
      setError('Ocorreu um erro ao cadastrar.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className='flex flex-col justify-center items-center text-white w-full' onSubmit={handleSubmit}>
      <div className='flex flex-col mb-2 w-full'>
        <label className='text-xl mb-2' htmlFor="email">E-mail:</label>
        <input 
          className='border rounded-lg border-white w-full h-12 mb-4 px-2'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className='flex flex-col mb-2 w-full'>
        <label className='text-xl mb-2' htmlFor="password">Senha:</label>
        <input 
          className='border rounded-lg border-white w-full h-12 mb-4 px-2'
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className='flex flex-col w-full'>
        <label className='text-xl mb-2' htmlFor="confirm-password">Confirmar Senha:</label>
        <input 
          className='border rounded-lg border-white w-full h-12 px-2'
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className='flex justify-start w-full mb-4'>
        <Link className='hover:underline' href="/auth/login">Já tem login? Login.</Link>
      </div>

      <div className='w-full flex justify-center'>
        <input 
          className='border rounded-lg border-white w-56 h-12 font-bebas text-5xl cursor-pointer hover:scale-110 duration-500'
          style={{ backgroundColor: '#605EDB' }}
          type="submit" 
          value={loading ? "Carregando..." : "Continuar"} 
          disabled={loading}
        />
      </div>
    </form>
  );
}
