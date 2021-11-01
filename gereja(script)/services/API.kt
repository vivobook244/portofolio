package com.example.hkbp_rajawali

import okhttp3.MultipartBody
import okhttp3.RequestBody
import retrofit2.Call
import retrofit2.http.*
import kotlin.collections.ArrayList

interface API {

// kegiatan
    @GET("kegiatan/data")
    fun getKegiatan():Call<ArrayList<ModelKegiatan>>

//    ibadah
    @GET("ibadah/data/status/{status}")
    fun getIbadah(
        @Path("status") status: String
    ):Call<ArrayList<ModelIbadah>>

    @GET("ibadah/data/{id}")
    fun getIbadahDetail(
        @Path("id") id: String
    ):Call<ArrayList<ModelIbadah>>



//ulang tahun & aniversary
    @GET("ibadah/data/birthday/{id_ibadah}")
    fun getUltah(
        @Path("id_ibadah") id_ibadah: String
    ):Call<ArrayList<ModelUltah>>

     @GET("ibadah/data/anniversary/{id_ibadah}")
    fun getAnniv(
        @Path("id_ibadah") id_ibadah: String
    ):Call<ArrayList<ModelAnniv>>


// warta ibadah
    @GET("ibadah/data/warta/{id_ibadah}")
    fun getWarta(
        @Path("id_ibadah") id_ibadah: String
    ):Call<ArrayList<ModelWarta>>


//    login checking phone http://hkbp.spindobikepekanbaru.store/api/app/jemaat/data/nomorponsel
    @GET("jemaat/data/{nomor_ponsel}")
    fun getPrivateDate(
        @Path("nomor_ponsel") nomor_ponsel: String
    ):Call<ArrayList<ModelPrivateData>>


// absensi http://hkbp.spindobikepekanbaru.store/api/app/ibadah/data/absensi/{id_ibadah}
    @GET("ibadah/data/absensi/{id_ibadah}")
    fun getNumAtendis(
        @Path("id_ibadah") id_ibadah: String
    ): Call<ModelAtendis>

//    checking status kehadiran http://hkbp.spindobikepekanbaru.store/api/app/ibadah/cekAbsensi?ibadah_id={id_ibadah}&jemaat_id={id_jemaat}
    @GET("ibadah/cekAbsensi?")
    fun getCheckAtendis(
    @Query("ibadah_id") ibadah_id: String,
    @Query("jemaat_id") jemaat_id: String
    ): Call<ModelCheckingAtendis>

// POST absensi http://hkbp.spindobikepekanbaru.store/api/app/ibadah/absensi
    @FormUrlEncoded
    @POST("ibadah/absensi")
    fun postAbsensi(
        @Field("ibadah_id") ibadah_id: Int,
        @Field("jemaat_id") jemaat_id: Int
    ): Call<PostResponse>


    // get data renungan http://hkbp.spindobikepekanbaru.store/api/app/renungan/data
    @GET("renungan/data")
    fun getRenungan(): Call<ArrayList<ModelRenungan>>

    @GET("renungan/data/{id_renungan}")
    fun getRenunganDetail(
        @Path("id_renungan") id_renungan: String
    ): Call<ArrayList<ModelRenungan>>

//  edit profil post API http://hkbp.spindobikepekanbaru.store/api/app/jemaat/data/change/{id}
    @FormUrlEncoded
    @PUT("jemaat/data/change/{id}")
    fun postDataPrivate(
        @Path("id") id: Int,
        @Field("name") name: String,
        @Field("tmp_lahir") tmp_lahir: String,
        @Field("tgl_lahir") tgl_lahir: String,
        @Field("jk") jk: String,
        @Field("alamat") alamat: String
    ): Call<PostResponse>

//  get donasi  http://hkbp.spindobikepekanbaru.store/api/app/donasi/data
    @GET("donasi/data")
    fun getAllDonasi(): Call<ArrayList<ModelDonasi>>

//    detail donasi http://hkbp.spindobikepekanbaru.store/api/app/donasi/data/{id}

    @GET("donasi/data/{id}")
    fun getDetailFund(
        @Path("id") id: String
    ): Call<ArrayList<ModelDetailDonasi>>


//    post nominal donasi http://hkbp.spindobikepekanbaru.store/api/app/donasi/inputDonasi
    @FormUrlEncoded
    @POST("donasi/inputDonasi")
    fun sendDataDonasi(
    @Field("donasi_id") donasi_id: String,
    @Field("jemaat_id") jemaat_id: String,
    @Field("nominal_transaksi") nominal_transaksi: String
    ) : Call<PostResponse>

//    list riwayat transaksi http://hkbp.spindobikepekanbaru.store/api/app/donasi/data/listDonasi/{id_jemaat}
    @GET("donasi/data/listDonasi/{id_jemaat} ")
    fun getlistRiwayat(
        @Path("id_jemaat") id_jemaat : String
    ): Call<ArrayList<ModelRiwayatTransaksi>>

//  post konfirmasi transaksi http://hkbp.spindobikepekanbaru.store/api/app/donasi/konfirmasi
    @Multipart
    @POST("donasi/konfirmasi?")
    fun sendFotoConfirmFund(
        @Part foto : MultipartBody.Part,
        @Part("desc") desc: RequestBody,
        @Part("nama") nama : String,
        @Query("donasi_id") donasi_id: String,
        @Query("jemaat_id") jemaat_id: String
    ): Call<PostResponse>

    @FormUrlEncoded
    @PUT("donasi/konfirmasi?")
    fun sendConfirmFund(

        @Field("nama") nama : String,
        @Query("donasi_id") donasi_id: String,
        @Query("jemaat_id") jemaat_id: String
    ): Call<PostResponse>

}