<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $userId = $this->route('user');

        return [
            'nim' => [
                'required',
                'string',
                'size:10',
                Rule::unique('users')->ignore($userId),
            ],
            'name' => 'required|string|max:120',
            'email' => [
                'required',
                'string',
                'email',
                'max:120',
                'unique:users,email,' . $userId,
                'regex:/^.*@(?:unud\.ac\.id|\.com)$/',
            ],
            'password' => 'required|string|min:8',
            'line_id' => 'required|string|max:120',
            'whatsaap_id' => 'required|string|max:120',
        ];
    }



    /**
     * Get custom attributes for validator errors.
     *
     * @return array<string, string>
     */
    public function attributes(): array
    {
        return [
            'nim' => 'NIM',
            'name' => 'Nama',
            'email' => 'Email',
            'password' => 'Kata Sandi',
            'line_id' => 'ID Line',
            'whatsaap_id' => 'ID WhatsApp',
        ];
    }

    /**
     * Get custom validation messages.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'nim.required' => 'NIM harus diisi.',
            'nim.size' => 'NIM harus terdiri dari tepat 10 karakter.',
            'nim.unique' => 'NIM sudah digunakan.',
            'name.required' => 'Nama harus diisi.',
            'name.string' => 'Nama harus berupa teks.',
            'name.max' => 'Nama tidak boleh melebihi 120 karakter.',
            'email.required' => 'Email harus diisi.',
            'email.email' => 'Format email tidak valid.',
            'email.max' => 'Email tidak boleh melebihi 120 karakter.',
            'email.unique' => 'Email sudah digunakan.',
            'email.regex' => 'Email harus berakhiran dengan .com atau unud.ac.id.',
            'password.required' => 'Kata Sandi harus diisi.',
            'password.string' => 'Kata Sandi harus berupa teks.',
            'password.min' => 'Kata Sandi harus memiliki minimal 8 karakter.',
            'line_id.required' => 'ID Line harus diisi.',
            'line_id.string' => 'ID Line harus berupa teks.',
            'line_id.max' => 'ID Line tidak boleh melebihi 120 karakter.',
            'whatsaap_id.required' => 'No WhatsApp harus diisi.',
            'whatsaap_id.string' => 'No tidak boleh melebihi 120 karakter.',
        ];
    }
}
