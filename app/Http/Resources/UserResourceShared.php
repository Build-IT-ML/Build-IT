<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResourceShared extends JsonResource
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
            'nim' => $this->nim,
            'name' => $this->name,
            'email' => $this->email,
            'line_id' => $this->line_id,
            'whatsaap_id' => $this->whatsaap_id,
        ];
    }
}
