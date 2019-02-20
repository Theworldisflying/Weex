package com.example.apps_weex.okhttp;

import android.nfc.Tag;
import android.os.Environment;
import android.provider.CalendarContract;
import android.util.Log;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class DownloadManager {
//获得一个单例类 https://www.cnblogs.com/zhuhuablog/p/5232452.html
//    单例模式优点：减少内存开支，避免资源浪费，常住内存，实现全局数据管理和共享；
//public static DownloadManager getInstance() {
//    for (; ; ) {
//        DownloadManager current =
//        if (current != null) {
//            return current;
//        }
//        current = new DownloadManager();
//        if (INSTANCE.compareAndSet(null, current)) {
//            return current;
//        }
//    }
//}
    public void downloadManager(){
        //1.创建OkHttpClient对象
        OkHttpClient okHttpClient = new OkHttpClient();
        //2.创建Request对象，设置一个url地址（百度地址）,设置请求方式。
        Request request = new Request.Builder().url("https://www.baidu.com/img/bd_logo1.png").get().build();
        //3.创建一个call对象,参数就是Request请求对象
        Call call = okHttpClient.newCall(request);
        //4.请求加入调度,重写回调方法
        call.enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                Log.e("dsafdad22222", "onFailure: "+call.toString() );
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                //拿到字节流
                InputStream is = response.body().byteStream();
                int len = 0;
                //设置下载图片存储路径和名称
                File file = new File(Environment.getDataDirectory().getAbsolutePath(),"baidu.png");
                FileOutputStream fos = new FileOutputStream(file);
                byte[] buf = new byte[128];
                while((len = is.read(buf))!= -1){
                    fos.write(buf,0,len);
                    Log.e("123123", "onResponse: "+len );
                }
                fos.flush();
                fos.close();
                is.close();
            }
        });
    }

}

