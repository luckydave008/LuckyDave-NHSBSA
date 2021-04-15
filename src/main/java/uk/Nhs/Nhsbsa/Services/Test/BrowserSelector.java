package uk.Nhs.Nhsbsa.Services.Test;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;

import static uk.Nhs.Nhsbsa.Services.Test.BasePage.driver;

public class BrowserSelector extends Utils
{
    // LoadProp object to get the browser from testconfig properties
    LoadProp loadProp = new LoadProp();

    public void setUpBrowser()
    {
        String browser = loadProp.getProperty("browser");

        if(browser.equalsIgnoreCase("chrome")) {
            WebDriverManager.chromedriver().setup();
            driver = new ChromeDriver ();
            driver.manage().window().fullscreen();
        }  else if (browser.equalsIgnoreCase ("Firefox")) {
            WebDriverManager.firefoxdriver().setup();
            driver = new FirefoxDriver ();
            driver.manage ( ).window ( ).fullscreen ( );
        } else {
            System.out.println("Browser not found");
        }
    }
}
