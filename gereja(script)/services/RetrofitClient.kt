package com.example.hkbp_rajawali

import com.google.android.gms.common.api.Api
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.create

object RetrofitClient {
    private const val BASE_URL = "http://hkbp.spindobikepekanbaru.store/api/app/"

    val instance : API by lazy {
        val retrofit: Retrofit = Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
        retrofit.create(API::class.java)
    }

}