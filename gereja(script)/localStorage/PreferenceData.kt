package com.example.hkbp_rajawali.Helper

import android.content.Context
import android.content.SharedPreferences


class PreferenceData(context: Context) {

    private val PREFS_NAME = "TEMP_DATA"
    private var tempdata: SharedPreferences
    val editor: SharedPreferences.Editor

    init {
        tempdata = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        editor = tempdata.edit()
    }

    fun putString(key: String, value: String)
    {
        editor.putString(key, value)
            .apply()
    }

    fun getString(key: String) : String?{
        return tempdata.getString(key, null)
    }



    fun putInt(key: String, value: Int)
    {
        editor.putInt(key, value)
            .apply()
    }

    fun getInt(key: String) : Int?{
        return tempdata.getInt(key, 0)
    }




    fun putBoolean(key: String, value: Boolean)
    {
        editor.putBoolean(key, value)
            .apply()
    }

    fun getBoolean(key: String) : Boolean{
        return tempdata.getBoolean(key, false)
    }

    fun erease(){
        editor.clear()
            .apply()
    }
}