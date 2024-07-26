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
            'tugas_alprog_link' => [
                'required',
                'string',
                'max:255',
                'regex:/^(https?:\/\/)?(www\.)?(drive\.google\.com\/file\/d\/[A-Za-z0-9_-]+\/?|drive\.google\.com\/open\?id=[A-Za-z0-9_-]+)$/',
            ],
            'tugas_basis' => [
                'required',
                'string',
                'max:255',
                'regex:/^(https?:\/\/)?(www\.)?(drive\.google\.com\/file\/d\/[A-Za-z0-9_-]+\/?|drive\.google\.com\/open\?id=[A-Za-z0-9_-]+)$/',
            ],
            'tugas_jarkom' => [
                'required',
                'string',
                'max:255',
                'regex:/^(https?:\/\/)?(www\.)?(drive\.google\.com\/file\/d\/[A-Za-z0-9_-]+\/?|drive\.google\.com\/open\?id=[A-Za-z0-9_-]+)$/',
            ],
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
            'tugas_alprog_link' => 'Tugas Alprog Link',
            'tugas_basis' => 'Tugas Basis',
            'tugas_jarkom' => 'Tugas Jarkom',
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
            'whatsaap_id.string' => 'No WhatsApp harus berupa teks.',
            'whatsaap_id.max' => 'No WhatsApp tidak boleh melebihi 120 karakter.',
            'tugas_alprog_link.required' => 'Tugas Alprog Link harus diisi.',
            'tugas_alprog_link.string' => 'Tugas Alprog Link harus berupa teks.',
            'tugas_alprog_link.max' => 'Tugas Alprog Link tidak boleh melebihi 255 karakter.',
            'tugas_alprog_link.regex' => 'Tugas Alprog Link harus berupa link Google Drive yang valid.',
            'tugas_basis.required' => 'Tugas Basis harus diisi.',
            'tugas_basis.string' => 'Tugas Basis harus berupa teks.',
            'tugas_basis.max' => 'Tugas Basis tidak boleh melebihi 255 karakter.',
            'tugas_basis.regex' => 'Tugas Basis harus berupa link Google Drive yang valid.',
            'tugas_jarkom.required' => 'Tugas Jarkom harus diisi.',
            'tugas_jarkom.string' => 'Tugas Jarkom harus berupa teks.',
            'tugas_jarkom.max' => 'Tugas Jarkom tidak boleh melebihi 255 karakter.',
            'tugas_jarkom.regex' => 'Tugas Jarkom harus berupa link Google Drive yang valid.',
        ];
    }
}

