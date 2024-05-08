<script lang="ts" setup>
import { useStatusStore } from '@/stores/datas/statusStore'
import { storeToRefs } from 'pinia'
import YrhCard from '../YrhCard.vue'

const { androidData } = storeToRefs(useStatusStore())
</script>

<template>
  <YrhCard>
    <template #title> Status </template>
    <template #content>
      <div class="flex justify-between">
        <span>
          {{ androidData.designation }}
        </span>
        <span> Lv : {{ androidData.level || 0 }} </span>
      </div>
      <hr class="my-2 border-t-2 border-y-beige-500" />
      <div class="flex justify-between">
        <span> Funds (G): </span>
        <span> {{ androidData.funds || 0 }} </span>
      </div>
      <div class="flex justify-between">
        <span> EXP: </span>
        <span> {{ androidData.exp || 0 }} </span>
      </div>
      <div class="flex justify-between">
        <span> HP: </span>
        <span> {{ androidData.hp || 0 }} / {{ androidData.maxHp || 0 }} </span>
      </div>
      <hr class="my-2 border-t-2 border-y-beige-500" />
      <div class="flex justify-between">
        <span> Attack (Light) : </span>
        <span> {{ androidData.attackLightBonus || 0 }} </span>
      </div>
      <div class="flex justify-between">
        <span> Attack (Heavy) : </span>
        <span> {{ androidData.attackHeavyBonus || 0 }} </span>
      </div>
      <div class="flex justify-between">
        <span> Ranged Attack : </span>
        <div class="flex gap-6">
          <span>{{ androidData.attackRangedBonus || 0 }}&nbsp;+</span>
          <span>{{ androidData.attackRangedRaw || 0 }}</span>
        </div>
      </div>
      <div class="flex justify-between">
        <span> Defense : </span>
        <span> {{ androidData.defenseRaw || 0 }} </span>
      </div>

      <div class="mt-2 text-y-beige-500 flex justify-around">
        <font-awesome-icon :icon="['far', 'square']" />
        <font-awesome-icon :icon="['far', 'square']" />
        <font-awesome-icon :icon="['far', 'square']" />
        <font-awesome-icon :icon="['far', 'square']" />
        <font-awesome-icon :icon="['far', 'square']" />
        <font-awesome-icon :icon="['far', 'square']" />
        <font-awesome-icon :icon="['far', 'square']" />
        <font-awesome-icon :icon="['far', 'square']" />
        <font-awesome-icon :icon="['far', 'square']" />
        <font-awesome-icon :icon="['far', 'square']" />
        <font-awesome-icon :icon="['far', 'square']" />
        <font-awesome-icon :icon="['far', 'square']" />
        <font-awesome-icon :icon="['far', 'square']" />
        <font-awesome-icon :icon="['far', 'square']" />
      </div>
      <hr class="mt-2 mb-0 border-t-2 border-y-beige-500" />
    </template>

    <template #footer>
      <div class="h-full grid place-items-center">
        <span class="text-xs uppercase">No error</span>
      </div>
    </template>
  </YrhCard>
</template>
