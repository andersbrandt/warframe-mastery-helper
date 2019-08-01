<?php

class Config
{
	public static $items = array();

	public static function load()
	{
		global $conf;
		static::$items = $conf;
		//static::$items = include('conf.php');
	}

	public static function get($value = null)
	{
		static::load();

		if (strpos($value, '.') !== false) {
			$input = explode('.', $value);
			$group = $input[0];
			$key = $input[1];
			if (!empty($key)) {
				return static::$items[$group][$key];
			}
		} else {
			$key = $value;
			if (!empty($key)) {
				return static::$items[$key];
			}
		}
	}
}



