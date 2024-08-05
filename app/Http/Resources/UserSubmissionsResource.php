<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserSubmissionsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'nim' => $this->nim,
            'name' => $this->name,
            'email' => $this->email,
            'line_id' => $this->line_id,
            'whatsapp_id' => $this->whatsapp_id,
            'kelompok' => $this->kelompok,
            'tugas_alprog' => $this->tugas_alprog,
            'tugas_basis' => $this->tugas_basis,
            'tugas_jarkom' => $this->tugas_jarkom
        ];
    }
}
