<?php

namespace App\Traits;

use Ramsey\Uuid\Uuid;

trait UuidTrait
{
    /**
     * Boot function from Laravel.
     */
    protected static function bootUuidTrait()
    {
        static::creating(function ($model) {
            if (!$model->getKey()) {
                $model->{$model->getKeyName()} = (string) Uuid::uuid4();
            }
        });
    }

    /**
     * Get the casts array.
     *
     * @return array
     */
    public function getCasts()
    {
        return array_merge(parent::getCasts(), [
            $this->getKeyName() => 'string',
        ]);
    }

    /**
     * Get the incrementing attribute.
     *
     * @return bool
     */
    public function getIncrementing()
    {
        return false;
    }

    /**
     * Get the key type attribute.
     *
     * @return string
     */
    public function getKeyType()
    {
        return 'string';
    }
}
