package com.huawei.jackydemo;

import ohos.aafwk.content.Intent;
import ohos.ace.ability.AceAbility;
import ohos.agp.utils.Color;
import ohos.agp.window.service.WindowManager;

public class MainAbility extends AceAbility {
    @Override
    public void onStart(Intent intent) {
        super.onStart(intent);

        WindowManager.getInstance().getTopWindow().get().setStatusBarColor(Color.LTGRAY.getValue());
    }

    @Override
    public void onStop() {
        super.onStop();
    }
}
