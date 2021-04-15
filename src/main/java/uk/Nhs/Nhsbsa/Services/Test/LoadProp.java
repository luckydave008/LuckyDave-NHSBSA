package uk.Nhs.Nhsbsa.Services.Test;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class LoadProp
{
    static Properties prop;
    static FileInputStream input;
    static String filename = "TestConfig.Properties";
    static String fileLocation = "src\\test\\Resources\\TestData\\";

    public String getProperty(String key)
    {
        prop = new Properties();
        try
        {
            input=new FileInputStream(fileLocation + filename);
            prop.load(input);
            input.close();
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }
        return prop.getProperty(key);
    }
}
