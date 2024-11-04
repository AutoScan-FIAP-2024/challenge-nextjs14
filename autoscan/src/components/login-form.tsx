"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm({ setLoading }: { setLoading: (isLoading: boolean) => void }) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push('/dashboard');
      } else {
        const result = await response.json();
        setError(result.message || 'Erro ao fazer login.');
        setLoading(false);
      }
    } catch (err) {
      console.error('Erro no login:', err);
      setError('Ocorreu um erro ao fazer login.');
      setLoading(false);
    }
  };

  return (
    <form 
      className='flex flex-col justify-center items-center text-white' 
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col mt-8 mb-8'>
        <label className='text-xl mb-2' htmlFor="email">E-mail:</label>
        <input 
          className='submit'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='flex flex-col'>
        <label className='text-xl mb-2' htmlFor="password">Senha:</label>
        <input 
          className='submit'
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className='flex justify-start w-64'>
        <Link className='hover:underline' href="">Esqueci minha senha</Link>
      </div>
      <div className='mt-4'>
        <input 
          className='border rounded-lg border-white w-64 h-12 font-bebas text-5xl cursor-pointer hover:scale-110 duration-500'
          style={{ backgroundColor: '#605EDB', borderColor: '#605EDB' }}
          type="submit" 
          value="Entrar" 
        />
      </div>
    </form>
  );
}
