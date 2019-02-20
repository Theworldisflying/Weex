package com.example.apps_weex;

import android.app.AlertDialog;
import android.content.Context;
import android.os.Bundle;


import com.wang.avi.AVLoadingIndicatorView;
//https://www.jianshu.com/p/5a8d887175d3
public class Loading extends AlertDialog {
    private static Loading loadingDialog;
    private AVLoadingIndicatorView avi;

//单例使用
    public static Loading getInstance(Context context) {
        if (loadingDialog == null) {
            loadingDialog = new Loading(context, R.style.TransparentDialog); //设置AlertDialog背景透明
            loadingDialog.setCancelable(false);
            loadingDialog.setCanceledOnTouchOutside(false);
        }

        return loadingDialog;
    }


    @Override
    protected void onStart() {
        super.onStart();
        this.setContentView(R.layout.loading_layout);
        avi = (AVLoadingIndicatorView)this.findViewById(R.id.avi);
    }

    public Loading(Context context, int themeResId) {
        super(context,themeResId);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.setContentView(R.layout.loading_layout);
        avi = (AVLoadingIndicatorView)this.findViewById(R.id.avi);
    }

    @Override
    public void show() {
        super.show();
        avi.show();
//        avi.smoothToShow();
    }

    @Override
    public void dismiss() {
        super.dismiss();
        avi.hide();
//        avi.smoothToHide();
    }
}
