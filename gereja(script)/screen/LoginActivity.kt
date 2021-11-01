package com.example.hkbp_rajawali

import android.annotation.SuppressLint
import android.app.ProgressDialog
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.text.Editable
import android.view.LayoutInflater
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AlertDialog
import androidx.core.view.isGone
import androidx.lifecycle.Observer
import com.example.hkbp_rajawali.Helper.Constant
import com.example.hkbp_rajawali.Helper.PreferenceData
import kotlinx.android.synthetic.main.activity_login.*
import kotlinx.android.synthetic.main.pop_up.view.*
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class LoginActivity : AppCompatActivity() {

    private lateinit var progressDialog: ProgressDialog
    lateinit var tempdata: PreferenceData

    private val userList = ArrayList<ModelPrivateData>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        tempdata = PreferenceData(this)



        var btnToOtp = findViewById<Button>(R.id.btnOtp)
        var numberPhone = findViewById<EditText>(R.id.phoneNumber)


        numberPhone.addTextChangedListener(object : android.text.TextWatcher {
            override fun afterTextChanged(p0: Editable?) {

            }

            override fun beforeTextChanged(p0: CharSequence?, p1: Int, p2: Int, p3: Int) {

            }

            @SuppressLint("NewApi")
            override fun onTextChanged(p0: CharSequence?, p1: Int, p2: Int, p3: Int) {
                if(numberPhone.length()  <= 11 && numberPhone.length() >= 10){
                    btnToOtp.isEnabled=true
                }else if(numberPhone.length() < 10 || numberPhone.length() > 11)
                {
                    btnToOtp.isEnabled=false
                }


            }

        })


        val net = networkCondition()



        btnToOtp.setOnClickListener {

                val getNumberphone = numberPhone.text.toString()
                progressDialog = ProgressDialog(this)
                progressDialog.setMessage("Verification Your Number")
                progressDialog.show()
   
                RetrofitClient.instance.getPrivateDate(getNumberphone).enqueue(object :
                    Callback<ArrayList<ModelPrivateData>> {

                    override fun onFailure(call: Call<ArrayList<ModelPrivateData>>, t: Throwable) {
                        progressDialog.dismiss()
                        Toast.makeText(this@LoginActivity, "Fail message: "+t.message, Toast.LENGTH_SHORT).show()

                    }

                    override fun onResponse(
                        call: Call<ArrayList<ModelPrivateData>>,
                        response: Response<ArrayList<ModelPrivateData>>
                    ) {
                        progressDialog.dismiss()


    

                        response.body()?.let { userList.addAll(it) }

                        val numGet: Int? = userList?.size

    

                        if (numGet == 0){
                            val warnView = LayoutInflater.from(this@LoginActivity).inflate(R.layout.pop_up, null)

                            val textNotif = "Nomor yang kamu masukkan belum terdaftar sebagai jemaat di Gereja HKBP Rajawali"

                            val warnViewBuilder = AlertDialog.Builder(this@LoginActivity)
                                .setView(warnView)
                            val alertDialog = warnViewBuilder.show()

                            warnView.bodyNotif.text = textNotif

                            warnView.btnRight.setOnClickListener {
                                alertDialog.dismiss()
                            }
                            warnView.btnLeft.setOnClickListener {
                                val toRegis = Intent(this@LoginActivity, RegisterActivity::class.java)
                                startActivity(toRegis)
                                finish()
                            }
                        }

                        else if(numGet == 1)
                        {
                            val item = userList[0]

                            val name = item.name
                            val sektor = item.sektor_name
                            val address = item.alamat
                            val birthday = item.tgl_lahir
                            val num_cell = item.nomor_ponsel
                            val jk = item.jk
                            val bornplace = item.tmp_lahir
                            val id_user = item.id.toString()
                            val cat = "USER"

                            tempdata.putString(Constant.PREF_NAME_USER,name)
                            tempdata.putString(Constant.PREF_UID,id_user)
                            tempdata.putString(Constant.PREF_PHONE,num_cell)
                            tempdata.putString(Constant.PREF_ADDRESS,address)
                            tempdata.putString(Constant.PREF_BIRTHDAY,birthday)
                            tempdata.putString(Constant.PREF_SEKTOR,sektor)
                            tempdata.putString(Constant.PREF_KELAMIN,jk)
                            tempdata.putString(Constant.PREF_BORNPLACE,bornplace)
                            tempdata.putString(Constant.PREF_CATHEGORY,cat)

                            val toOtp = Intent(this@LoginActivity, OtpActivity::class.java)
                            tempdata.putBoolean(Constant.PREF_IS_LOGIN, true)

                            startActivity(toOtp)
                            finish()

                        }
                    }
                })


        }



    }
    fun networkCondition(){
        val networkStatus = checkingConnection(applicationContext)


            networkStatus.observe(this, Observer {
            isConnected ->
                if (!isConnected){
                    warView("Periksa kembali koneksi internet anda","Koneksi error")
                    btnOtp.isClickable = false
                }
        })

    }

    fun warView(textView: String, titleHead: String){
        val warnView = LayoutInflater.from(this)
            .inflate(R.layout.pop_up, null)



        val warnViewBuilder = AlertDialog
            .Builder(this)
            .setView(warnView)
        val alertDialog = warnViewBuilder.show()

        warnView.headTitle.text = titleHead
        warnView.bodyNotif.text = textView
        warnView.btnRight.text = "Tutup"

        warnView.btnRight.setOnClickListener {
            alertDialog.dismiss()
        }
        warnView.btnLeft.isGone = true


    }
}


