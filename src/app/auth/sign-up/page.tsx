"use client";

import { useAuth } from "@/app/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function SignUp({
	onSignInClick,
}: { onSignInClick: () => void }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const { login } = useAuth();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("As senhas não coincidem");
			return;
		}
		try {
			// Aqui você deve implementar a lógica de cadastro
			// Por exemplo, fazer uma chamada API para criar o usuário
			await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulando uma chamada API
			// Após o cadastro bem-sucedido, faça o login automático
			await login(email, password);
		} catch (error) {
			console.error("Falha no cadastro", error);
			alert("Falha no cadastro. Por favor, tente novamente.");
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-background">
			<div className="max-w-md w-full space-y-8 p-8 bg-card rounded-lg shadow-lg">
				<div className="text-center">
					<h2 className="mt-6 text-3xl font-bold text-foreground">
						Criar uma nova conta
					</h2>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<Label htmlFor="name" className="sr-only">
								Nome completo
							</Label>
							<Input
								id="name"
								name="name"
								type="text"
								autoComplete="name"
								required
								className="rounded-t-md mb-4"
								placeholder="Nome completo"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div>
							<Label htmlFor="email-address" className="sr-only">
								Endereço de e-mail
							</Label>
							<Input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="rounded-t-md mb-4"
								placeholder="Endereço de e-mail"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<Label htmlFor="password" className="sr-only">
								Senha
							</Label>
							<Input
								id="password"
								name="password"
								type="password"
								autoComplete="new-password"
								required
								className="rounded-t-md mb-4"
								placeholder="Senha"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div>
							<Label htmlFor="password-confirm" className="sr-only">
								Confirmar senha
							</Label>
							<Input
								id="password-confirm"
								name="password-confirm"
								type="password"
								autoComplete="new-password"
								required
								className="rounded-b-md mb-4"
								placeholder="Confirmar senha"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</div>
					</div>

					<div>
						<Button type="submit" className="w-full">
							Cadastrar
						</Button>
					</div>
				</form>
				<div className="text-center">
					<p className="mt-2 text-sm text-muted-foreground">
						Já tem uma conta?{" "}
						<button
							type="button"
							onClick={onSignInClick}
							className="font-medium text-primary hover:text-primary/80"
						>
							Entrar
						</button>
					</p>
				</div>
			</div>
		</div>
	);
}
